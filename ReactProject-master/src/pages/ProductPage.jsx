import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import ReactStars from 'react-stars'
import ImageSection from '../components/ImageSection'


function ProductPage() {

    const { productID } = useParams()
    const [product, setproduct] = useState({})
    const [review, setReview] = useState("")
    const [ratingstar, setratingStar] = useState(0)
    const [productQuantity, setproductQuantity] = useState(1)

    const ratingChanged = (newRating) => {
        setratingStar(newRating)
    }

    const submitReview = () => {
        const payload = {
            productID: productID,
            review: review,
            rating: ratingstar
        }
        console.log(payload)


        Swal.fire({
            title: 'Successfully Submitted!',
            text: 'Thanks for reviewing our product',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
        })

        setReview('')
        setratingStar(0)

    }

    const addToCart = () => {

        const payload = {
            ...product,
            productQuantity,
            totalPrice: product.price * productQuantity
        }

        console.log(payload)

        Swal.fire({
            title: 'Added to Cart!',
            text: 'Check your Cart for Check Out',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
        })
    }

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${productID}`).then(json => setproduct(json.data))

    }, [])


    return (
        <div className="container">
            <div className="text-center my-5">
                <h1>{product.title}
                    <br />
                    Price {product.price}$</h1>
                <p className="text-secondary">{product.description}</p>
                <div className='d-flex justify-content-center'>
                    <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value={product.rating}
                        color2={'#ffd700'}
                    />
                </div>

                <div className="my-3">
                    <button className="btn btn-danger mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setproductQuantity(productQuantity - 1)}>-</button>
                    {productQuantity}
                    <button className="btn btn-danger mx-3" onClick={() => setproductQuantity(productQuantity + 1)}>+</button>
                </div>


                <button className='btn btn-danger' onClick={addToCart}>Add to Cart</button>
            </div>

            <div className="row">
                <div className="col-md-6">

                    {
                        product?.images?.length > 0 && <ImageSection images={product.images} />
                    }

                </div>


                <div className="col-md-6">

                    <div className="container">
                        <div className='mb-5'>
                            <h3 className="text-center">Reviews Us</h3>
                        </div>



                        <div>


                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    style={{ height: 100 }}
                                    defaultValue={review}
                                    onChange={(e) => setReview(e.target.value)}
                                />
                                <label htmlFor="floatingTextarea2">Comments</label>
                            </div>

                            <div className='mt-3 text-center'>

                                Rate Us :
                                <div className="d-flex align-items-center justify-content-center">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={ratingstar}
                                        onChange={ratingChanged}
                                        color2={'#ffd700'}
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className='my-3 btn btn-danger' onClick={submitReview}>Submit review</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default ProductPage