import useFetch from "./useFetch/"
export default function Index() {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/posts')
    return (
        <div className={{display:'flex'}}>
            {
                data && data.map((item, index) => {
                    return (
                        <div key={index} >
                            <h3 key={item.id}>{item.id} {item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}