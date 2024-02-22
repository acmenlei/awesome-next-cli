import { queryTest } from "./api";
import Test from "./components/Test";
import { Suspense } from "react";

export default function Flow() {
  // 数据由父组件传递
  return (
    <>
      <Suspense fallback={<div>正在加载</div>}>
        <Test data={queryTest()} />
      </Suspense>
    </>
  );
}