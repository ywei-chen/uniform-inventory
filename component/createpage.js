import '@/styles/globals.css';
import styles from '@/styles/style.module.css';

const Createpage = () => {
    return (<>
        <div>
            <div>
                <h2>新增資料選單</h2>
            </div>
            <form>
                <div>
                    <h1>性別代號</h1>
                    <select></select>
                </div>
                <div>
                    <h1>尺寸代號</h1>
                    <select></select>
                </div>
                <div>
                    <h1>制服種類</h1>
                    <select></select>
                </div>
            </form>
            <button className=''>儲存項目</button>
        </div>
    </>)
}

export default Createpage;