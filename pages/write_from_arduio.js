// import Image from './../app/next/image'
import styles from './page.module.css'
import Image from "next/image";
import {Button, Input} from "antd";
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter();

    const redirect = (e) => {
        e.preventDefault()
        setTimeout(()=>{
            router.push('/')
        },1000)
    }
    const onClick = () => {
        return ""
    }
    return (
        // <main className={styles.main}>
        <div>

            <div style={{margin: "auto", textAlign: "center",padding:"32px"}}>
                <Input style={{margin: "auto", textAlign: "center"}} placeholder="عبارت مورد نظر را وارد کنید"/>
            </div>
            <Button onClick={redirect} type="primary" style={{margin: "auto", textAlign: "center"}} className={styles.description}>

                {/*<div style={{margin: "auto", textAlign: "center"}}>*/}
                    {/*{onClick()}*/}
                    کلیک کنید تا به اردوینو بفرستم
                {/*</div>*/}

            </Button>
        </div>
    )
}
