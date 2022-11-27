import { useLoaderData } from "react-router-dom";

const CategoryProduct = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="lg:mx-36">
            <h2 className="my-8 text-4xl font-semibold">Hare is our all <span className="text-secondary">{data[0]?.category}</span> Product</h2>

            <div className="grid grid-cols-2 gap-12">
                {
                    data.map(d =>
                        <div key={d._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className="w-44 h-48" src={d?.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-secondary">{d.name}</h2>
                                <div className="flex justify-between ">
                                    <div>
                                        <p className="text-xl text-info">Resale Price =${d.currentPrice}</p>
                                        <p className="text-xl text-info">Original Price =${d.oldPrice}</p>
                                    </div>
                                    <div>
                                        <h2>total used= 2 month</h2>
                                        <h2>Zone-{d.location}</h2>
                                    </div>
                                </div>
                                <h2 className="text-secondary text-xl">Seller - {d?.user?.displayName}✔️</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryProduct;