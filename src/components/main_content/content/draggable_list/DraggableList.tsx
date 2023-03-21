import DraggableContent from "../../../DraggableContent";

function DraggableList() {
    return (
        <>
            <DraggableContent items={items}/>
        </>
    )
}

const items = [
    { name: "Slam Dunk", backgroundImage: "url('https://geekculture.co/wp-content/uploads/2022/08/slam-dunk-youtube-toei-2.jpg')" },
    { name: "Haikyuu!!", backgroundImage: "url('https://www.geek-germany.de/wp-content/uploads/2022/02/Haikyu-800x445.jpg')" },
    { name: "Bakuman.", backgroundImage: "url('https://i0.wp.com/phenixxgaming.com/wp-content/uploads/2020/02/bakuman-1.jpg?fit=1920%2C1200&ssl=1')" },
    { name: "Hajime no Ippo", backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQ9VxLx7VJyFJg9OtmrnFjxY3JeSVQz1lM_UHXo7UtKVp15LLArH7Ygi4XuRR9obk_RM&usqp=CAU')" },
    { name: "Fullmetal Alchemist: Brotherhood", backgroundImage: "url('https://staticg.sportskeeda.com/editor/2022/04/cfd62-16506168008635-1920.jpg')" },
    { name: "Hunter x Hunter (1999)", backgroundImage: "url('https://dw9to29mmj727.cloudfront.net/promo/2016/6231-SeriesHeaders_HxH_2000x800.jpg')" },
    { name: "Diamond no Ace", backgroundImage: "url('https://thelimitlessimagination.files.wordpress.com/2021/06/diamond-no-ace-struggle-team.jpg')" },
    { name: "Chihayafuru", backgroundImage: "url('https://thecinemaholic.com/wp-content/uploads/2020/03/chihayafuru.jpeg')" },
    { name: "Ookiku Furikabutte", backgroundImage: "url('http://vignette3.wikia.nocookie.net/bigwindup/images/a/aa/Noofuri075_027_filtered_001.jpg/revision/latest?cb=20140503153715')" },
    { name: "Gekkan Shoujo Nozaki-kun", backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Monthly_Girls%27_Nozaki-kun_characters.jpg/300px-Monthly_Girls%27_Nozaki-kun_characters.jpg')" },
    { name: "Blue Lock", backgroundImage: "url('https://www.whats-on-netflix.com/wp-content/uploads/2022/10/where-to-watch-blue-lock-on-netflix-jpg.webp')"}
]

export default DraggableList;