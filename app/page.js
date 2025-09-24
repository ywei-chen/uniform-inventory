import '@/style/globals.css';
import Navbar from '@/component/navbar';
import Content from '@/component/content';
import Footer from '@/component/footer';

const item = ['進庫', '出庫', '庫存表'];

export default function Home() {
  return (<>
  <Navbar />
  <Content />
  <Footer />
  </>)
}