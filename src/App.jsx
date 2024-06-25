import { useState } from 'react'
import './index.css'
let num = false;
let spch = false;
function App() {
    const [password, setpassword] = useState()
    function Range() {
        let range = rng.value
        gnrtps(range);
    }
    function gnrtps(range) {
        let text = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        let char = ['!', '@', '#', '$', '%', '^', '&', '*']                                       //  First Method

        // if (spch) text = text.concat('!', '@', '#', '$', '%', '^', '&', '*')                         // Secound Method
        // if (num) text = text.concat('1', '2', '3', '4', '5', '6', '7', '8', '9', '0')                // Secound Method
        let arr = [];
        for (let i = 0; i < range; i++) {


            // arr[i] = text[Math.ceil(Math.random() * text.length)]                                    // Secound Method


            for (let j = 0; j < range; j++) {                                                     //  First Method
                if (num && spch) {
                    let use = Math.ceil(Math.random() * 3)
                    if (use == 1) {
                        arr[i] = text[Math.ceil(Math.random() * 51)]
                    }
                    if (use == 2) {
                        arr[i] = char[Math.ceil(Math.random() * 7)]
                    }
                    if (use == 3) {
                        arr[i] = Math.floor(Math.random() * 10)
                    }
                }
                if (num == true && spch == false) {
                    let use = Math.ceil(Math.random() * 2)
                    if (use == 1) {
                        arr[i] = text[Math.ceil(Math.random() * 51)]
                    }
                    if (use == 2) {
                        arr[i] = Math.floor(Math.random() * 10)
                    }
                }
                if (num == false && spch == true) {
                    let use = Math.ceil(Math.random() * 2)
                    if (use == 1) {
                        arr[i] = text[Math.ceil(Math.random() * 51)]
                    }
                    if (use == 2) {
                        arr[i] = char[Math.ceil(Math.random() * 7)]
                    }
                }
                if (num == false && spch == false) {
                    arr[i] = text[Math.ceil(Math.random() * 51)]
                }
            }                                                                                     //  First Method
            setpassword(arr.join(''))


            document.getElementById('pass').innerHTML = password;
        }
    }

    return (
        <>
            <div className="box bg-slate-800 w-96 h-66 flex flex-col rounded-xl p-6 text-white" >
                <h1 className='text-3xl flex justify-center items-center pb-4 text-slate-400 underline'>Password Generator</h1>
                <div className=' flex flex-row gap-2'>
                    <input type='text' className='w-4/6 h-10 rounded-lg bg-gray-600 text-white p-3' id='pass' readOnly value={password} />
                    <button className=' h-10 items-center w-2/6 bg-gray-600 rounded-lg text-white' onClick={() => {
                        document.getElementById('pass').select();
                        document.execCommand('copy');
                    }}>Copy</button>
                </div>
                <div className=' h-10 items-center flex justify-center m-3'>
                    <label htmlForfor="vol">Lenth : </label>
                    <input type="range" id="rng" min="8" max="20" onInput={Range} defaultValue={8} />
                </div>
                <div className=' h-10 items-center flex justify-evenly'>


                    <div class="flex items-center mb-4 flex-nowrap">
                        <input id="chack1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                        onClick={() => {
                            num = !num
                            Range()

                        }}/>
                        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Number</label>
                    </div>
                    <div class="flex items-center mb-4 flex-nowrap">
                        <input id="chack2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"                        onClick={() => {
                            spch = !spch
                            Range()

                        }} />
                        <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Special Character</label>
                    </div>

                  
                </div>
            </div>
        </>
    )
}
export default App