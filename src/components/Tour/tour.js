function Tour(props){
    <>
<div>
    <h4>{props.name}</h4>
    <img src={props.image} alt={props.name} />
    <h4>price:{props.price}</h4>
</div>
{document.write("\n")}
</>
}
export default Tour