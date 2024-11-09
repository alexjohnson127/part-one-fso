export default function Total(props){
    let sumTotal = 0
    console.log(props)
    props.course.parts.forEach((x) => sumTotal += x.exercises)

    return (
        <p>Number of excercises: {sumTotal}</p>
    )
}