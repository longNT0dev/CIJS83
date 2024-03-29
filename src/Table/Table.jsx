import React, { useState, useMemo, useCallback, useRef, useContext, useEffect, } from 'react';
import { Table, Button } from 'antd';
import { useVT } from 'virtualizedtableforantd';

function rndstr(str) {
  const n = 0 | (Math.random() * 4) + 1;
  let s = '';
  for (let i = 0; i < n; ++i) {
    s += str;
  }
  return s;
}


export default function Table1() {
  

  const [chunkid, setChunkID] = useState(1);
  const [data, setData] = useState([]);

  const myajax = useCallback((chunkid) => {
    const data = [];
    if (chunkid === 1) {
      for (let i = 0; i < 1000; i++) {
        const n = 0 | Math.random() * 3000 + 1000;
        data.push({
          key: `${chunkid}-${i}`,
          name: `Edrward ${chunkid}-${i}`,
          age: 0 | Math.random() * 88 + 12,
          address: rndstr(`London Park no. ${n}`),
        });
      }
    } else {
      /** chunk */
      for (let i = 0; i < 200; i++) {
        const n = 0 | Math.random() * 3000 + 1000;
        data.push({
          key: `${chunkid}-${i}`,
          name: `Edrward ${chunkid}-${i}`,
          age: 0 | Math.random() * 88 + 12,
          address: rndstr(`London Park no. ${n}`),
        });
      }
    }


    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // returns chunkid from your server.
        resolve([chunkid + 1, data]);
      }, Math.random() * 200 + 100);
    });
  }, []);

  // Pagination
  const [showPagination, setPagination] = useState(false);

  // Column name age 1 2 3 4 5 6 7 8 operation
  const _columns = useMemo(() => [
    {
      title: 'Full Name',
      width: 150,
      dataIndex: 'name',
      key: 'name',

      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
      width: 150,
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
      width: 170,
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
      width: 180,
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
      width: 190,
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
      width: 150,
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '7',

    },
    { title: 'Column 8', dataIndex: 'address', key: '8' },

  ], []);

  
  const loadDataByChunk = useCallback(async (chunkid, data) => {
    const [ _newchunkid, _newdata ] = await myajax(chunkid);
    setChunkID(_newchunkid);
    setData([...data, ..._newdata]);
  }, [setData, setChunkID]);

  const y = 500;

  const [vt] = useVT(() => ({
    onScroll: ({ isEnd }) => {
      if (isEnd) {
        console.log("loadDataByChunk");
        loadDataByChunk(chunkid, data);
      }
    },
    scroll: { y },
    debug: true,
  }), [chunkid, data]);

  console.log(vt)

  return (
    <>
      <Button onClick={async () => {
        loadDataByChunk(chunkid, data);
      }}>{"load data"}</Button>
      <br />
      <br />

      <br />
      <Button onClick={() => {
        if (showPagination) {
          setPagination(false);
        } else {
          setPagination(true);
        }
      }}>{!showPagination ? "show" : "hide"}</Button>

      <Table
        style={{ width: 1500 }}
        columns={_columns}
        dataSource={data}
        scroll={{ y, x: 1500 }}
        components={vt.table}
        pagination={showPagination ? {
          pageSize: 50,
        } : false}
      >
      </Table>
    </>
  );
}