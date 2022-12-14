import MainLinks from "../../components/Main/Main-links"
import '../../components/Main/Main.css'
import { pageLinks } from "../../components/pageLinks"

const Main = () => {
    return(
        <main className="home mx-auto p-3 pb-lg-4 d-lg-flex flex-lg-column justify-content-around">
            <p className='intro fw-light fs-6 py-3 ps-md-3'>
                In recent years, we have witnessed a rather worrying climate changes.
                This is the reason why we need to be careful and take care of our Earth.
                So I thought, it would be nice to have an app which you can monitor
                global warming data and I developed it.
                With this app you can check: temperature anomalies, methan, carbon dioxide and
                nitrous oxide levels and polar ice caps.
            </p>

            <MainLinks items={pageLinks} />
        </main>
    )
}

export default Main