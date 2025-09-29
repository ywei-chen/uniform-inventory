'use client';

import '@/styles/globals.css';
import styles from '@/styles/style.module.css';
import Createpage from './createpage';
import { useState } from 'react';



const Leftlocation = () => {
    return (<>
        <div className='rounded-md bg-stone-50 ml-10 mr-3 w-80 h-150 overflow-hidden shadow-lg'>
            <div className='bg-sky-700 h-16 w-full grid place-items-center mb-10'>
                <p className='text-stone-50 text-xl font-semibold tracking-wider'>庫存管理系統</p>
            </div>
            <div>
                <div className='mb-6'>
                    <h2 className={styles.menuSection}>庫存管理</h2>
                    <div>
                        <p className={styles.menuItem}>基本資料管理</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='mb-6'>
                    <h2 className={styles.menuSection}>進出貨管理</h2>
                    <div className='list-none'>
                        <p className={styles.menuItem}>進庫管理</p>
                        <p className={styles.menuItem}>進庫紀錄</p>
                        <p className={styles.menuItem}>出庫管理</p>
                        <p className={styles.menuItem}>出庫紀錄</p>
                    </div>

                </div>
                <div className='mb-6'>
                    <h2 className={styles.menuSection}>其他設定</h2>
                    <div className='list-none'>
                        <p className={styles.menuItem}>帳號設定</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}


const Content = () => {
    const pItem = ['編碼代號', '性別代號', '尺寸代號', '制服種類','創建時間', '二維碼','編輯','刪除'];
    const [isOpen, setIsopen] = useState(false);
    
    return (<>
        <section>
            <div className='flex items-center justify-center my-10'>
                { isOpen && <Createpage onClose={() => setIsopen(false)}/>}
                <Leftlocation />
                {/*右欄區域 */}
                <div className='rounded-md bg-stone-50 ml-3 mr-10 w-full h-150 shadow-lg'>
                    <div className='flex mb-10'>
                        <form className='flex justify-start items-center'>
                            <input name='qrcode' placeholder='請掃描或輸入QRcode' className={styles.inputItem}></input>
                            <button className={styles.buttonSearch}>搜尋</button>
                        </form>
                        <div className='w-full flex justify-start'>
                            <button type='button' className={styles.buttonCreat} onClick={() => setIsopen(true)}>新增</button>
                        </div>
                    </div>
                    <div className='rounded-sm h-11 w-auto flex justify-around items-center bg-slate-600 mx-6 '>
                        {pItem.map((item) => {
                            return (<p className={styles.pItem} key={item}>{item}</p>)
                        })}
                    </div>
                    <div className='rounded-sm h-11 w-auto flex justify-around items-center border-stone-200 mx-6'>

                    </div>
                </div>
            </div>
        </section>
        <div className='my-10'></div>
    </>)
}

export default Content;