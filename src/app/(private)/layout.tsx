import { Navbar } from '@/widgets/navbar';
import { PropsWithChildren } from 'react';

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
