// import Image from './../app/next/image'
import styles from './page.module.css'
import Image from "next/image";
import {Button} from "antd";
import {useState} from "react";

export default function Home() {
    const [test, setText] = useState("")
    const onClick = () => {
        setText("سلام")
    }
    return (
        <div>
            <div>
                <Button onClick={onClick}
                        type="primary" style={{margin: "auto", textAlign: "center",padding:"32px"}} className={styles.description}>

                    نمایش عبارت مد نظر


                </Button>

            </div>
            <div style={{margin: "auto", textAlign: "center",padding:"32px"}}>
                {test}
            </div>
        </div>
    )
}
