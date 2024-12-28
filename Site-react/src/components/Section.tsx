import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


export  function Section(props: {
    className: string | undefined;
    children: ReactNode; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; subtitle: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
}){
    return(
        <>
            <section>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                    <ul className={props.className}>{props.children} </ul>
                </div>
            </section>
        </>
    )
}