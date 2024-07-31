export default function Reviews({params}: {
    params: {
        productId: string;
    }
}){
    return (
      <div>
        <h1>Reviews for product {params.productId}</h1>
      </div>
    )
  }
  