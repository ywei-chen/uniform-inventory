import '@/styles/globals.css';
import styles from '../styles/style.module.css';

const Content = () => {
    return (<>
        <div className='my-10'></div>
        <section>
            <div className='flex items-center justify-center'>
                {/*左欄區域 */}
                <div className='rounded-md bg-stone-50 ml-10 mr-3 w-80 h-150 overflow-hidden'>
                    <div className='bg-sky-700 h-16 w-full grid place-items-center mb-10'>
                        <p className='text-stone-50 text-xl font-semibold tracking-wider'>庫存管理系統</p>
                    </div>
                    <div>
                        <div className='mb-8'>
                            <h2 className='text-xl ml-7 mb-4 text-sky-700 font-semibold tracking-wider'>庫存管理</h2>
                            <ul className='list-none'>
                                <li className={styles.menuItem}>基本資料管理</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='mb-8'>
                            <h2 className='text-xl ml-7 mb-4 text-sky-700 font-semibold tracking-wider'>進出貨管理</h2>
                            <ul className='list-none'>
                                <li className='ml-14 mb-3 text-lg font-medium tracking-wider'>進庫管裡</li>
                                <li className='ml-14 mb-3 text-lg font-medium tracking-wider'>進庫紀錄</li>
                                <li className='ml-14 mb-3 text-lg font-medium tracking-wider'>出庫管理</li>
                                <li className='ml-14 mb-3 text-lg font-medium tracking-wider'>出庫紀錄</li>
                            </ul>

                        </div>
                        <div className='mb-8'>
                            <h2 className='text-xl ml-7 mb-4 text-sky-700 font-semibold tracking-wider'>其他設定</h2>
                            <ul className='list-none'>
                                <li className='ml-14 mb-3 text-lg font-medium tracking-wider'>帳號設定</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*右欄區域 */}
                <div className='rounded-md bg-stone-50 ml-3 mr-10 w-full h-150'></div>
            </div>
        </section>
        <div className='my-10'></div>
    </>)
}

export default Content;