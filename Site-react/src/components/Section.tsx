import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


export  function Section(props: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; subtitle: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }){
    return(
        <>
            <section>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                    <ul className="games-list"> </ul>
                </div>
            </section>
        </>
    )
}