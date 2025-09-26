'use client';

import '@/styles/globals.css';
import styles from '@/styles/style.module.css';
import { use, useState } from 'react';

const Createpage = ({onClose}) => {
    const gender = [{ value: 'F', label: '女生'}, { value: 'M', label: '男生'}];
    const uniform = [
        {value: 'coach', label:'教練上衣'}, {value: 'common', label:'一般上衣'},
        {value: 'coat', label:'上身外套'}, {value: 'overall', label:'整套工衣'}
    ];
    const sizes = [
        { value: 'XS', label: 'XS'}, { value: 'S', label: 'S'}, { value: 'M', label: 'M'},
        { value: 'L', label: 'L'}, { value: 'XL', label: 'XL'}, { value: '2XL', label: '2XL'},
        { value: '3XL', label: '3XL'}, { value: '4XL', label: '4XL'}, { value: '5XL', label: '5XL'},
    ];


    return (<>
        <div className='fixed z-30 inset-0 flex justify-center items-center'>
            <div className='absolute inset-0 size-full bg-slate-700 opacity-75' onClick={onClose}/>
            <div className='relative z-40 shadow-2xl w-md bg-stone-100 border-stone-200 border-2 rounded-xl p-6' onClick={(e) => e.stopPropagation()}>
                <div className='mb-6'>
                    <h2 className=' tracking-wider text-lg text-center bg-sky-700 text-stone-50 py-3 rounded-sm'>新增資料選單</h2>
                </div>
                <form>
                    <div className='mb-4'>
                        <h1 className='font-medium mb-1'>性別代號</h1>
                        <select className={styles.selectItem} defaultValue=''>
                            <option value='' disabled>請選擇性別</option>
                            {gender.map((gender) => {
                                return (
                                    <option key={gender.value} value={gender.value}>{gender.label}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='mb-4'>
                        <h1 className='font-medium mb-1'>制服種類</h1>
                        <select className={styles.selectItem} defaultValue=''>
                            <option value='' disabled>請選擇制服</option>
                            {uniform.map((uniform) => {
                                return (
                                    <option key={uniform.value} value={uniform.value}>{uniform.label}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='mb-4'>
                        <h1 className='font-medium mb-1'>尺寸代號</h1>
                        <select className={styles.selectItem} defaultValue=''>
                            <option value='' disabled>請輸入尺寸</option>
                            {sizes.map((size) => {
                                return (
                                    <option key={size.value} value={size.value}>{size.label}</option>
                                )
                            })}
                        </select>
                    </div>
                </form>
                <button className={styles.buttonSave}>儲存項目</button>
            </div>
        </div>
    </>)
}

export default Createpage;