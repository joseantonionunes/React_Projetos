

export default function ListItem(props: { url: string | undefined; imageUrl: string | undefined; alt: string | undefined; }){
    return(
        <li>
            <a target="_blank" rel="noreferrer" href={props.url}>
                <img src={props.imageUrl} alt={props.alt} />
            </a>
        </li>
    )
}