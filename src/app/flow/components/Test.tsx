import { use } from "react";

type Props = {
  data: Promise<any>;
};

export default function Test({ data }: Props) {
  const value = use(data);
  return <>{value}</>;
}
