import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
    return (
        <form className='form' action=''>
            <div className='form-row'>
                <DefaultInput type='text' label='Task' id='input_task' placeholder='Task name' />
            </div>

            <div className='form-row'>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='form-row'>
                <Cycles />
            </div>

            <div className='form-row'>
                <DefaultButton>
                    <PlayCircleIcon />
                </DefaultButton>
            </div>
        </form>
    );
}