// import Image from './../app/next/image'
import styles from './page.module.css'
import Image from "next/image";
import {Button} from "antd";
import {useRouter} from 'next/router';

export default function Home() {
    const router = useRouter();
    const onClick1 = (e) => {
        e.preventDefault()
        router.push('/write_from_server')
    }

    const onClick2 = (e) => {
        e.preventDefault()
        router.push('/write_from_arduio')
    }


    return (
        // <main className={styles.main}>
            <div >
                <div style={{margin: "auto",padding:"32px"}}>
                    <Button onClick={onClick2}
                            type="primary" block>
                        نوشتن کد در آردوینو
                    </Button>
                </div>
                <div style={{margin: "auto",padding:"32px"}}>
                    <Button onClick={onClick1} type="primary" block>
                        خواندن از آردوینو
                    </Button>
                </div>
            </div>

    )
}
