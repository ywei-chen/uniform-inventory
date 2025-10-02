'use client';

import '@/styles/globals.css';
import styles from '@/styles/style.module.css';
import { use, useEffect, useState } from 'react';
import { set } from 'react-hook-form';

const Createpage = ({onClose, onSave}) => {
    const [genderPick, setGenderpick] = useState('');
    const [uniformPick, setUniformpick] = useState('');
    const [sizePick, setSizepick] = useState('');
    const [code, setCode] = useState(''); 

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

    useEffect(() => {
        if (genderPick && uniformPick && sizePick) {
            const newCode = `${genderPick}-${uniformPick}-${sizePick}`;
            setCode(newCode);
        }else {
            setCode('');
        }
    },[genderPick, uniformPick, sizePick]);

    const handleSave = async() => {
        if (!genderPick || !uniformPick || !sizePick){
            alert('請完整填寫資訊');
        }

        const payload = {
            code: code,
            gender: genderPick,
            sizes: sizePick,
            uniform: uniformPick 
        };

        
    }



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
                        <select className={styles.selectItem} value={genderPick} onChange={(e) => setGenderpick(e.target.value)}>
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
                        <select className={styles.selectItem} value={uniformPick} onChange={(e) => setUniformpick(e.target.value)}>
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
                        <select className={styles.selectItem} value={sizePick} onChange={(e) => setSizepick(e.target.value)}>
                            <option value='' disabled>請輸入尺寸</option>
                            {sizes.map((size) => {
                                return (
                                    <option key={size.value} value={size.value}>{size.label}</option>
                                )
                            })}
                        </select>
                    </div>
                </form>
                { code && <div className='mb-4'>
                    <h1 className='font-medium mb-1'>序號產生</h1>
                    <div className='bg-stone-200 size-full p-2 rounded-sm'>
                        {code}
                    </div>
                </div>}
                <button className={styles.buttonSave} onClick={handleSave}>儲存項目</button>
            </div>
        </div>
    </>)
}

export default Createpage;