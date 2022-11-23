import React, { useState, useEffect } from 'react'
import Restuarantcard from './Restuarantcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestuarantlistActions } from '../Actions/restuarantListAction';
import {useDispatch, useSelector} from 'react-redux'



function Restuarantlist() {
  // create state to hold all restuarent
  const [allRestuarants, setRestuarant] = useState([])

  // function to call api to get all restuarant list db.json
  // const getRestuarant = async () => {
  //   await fetch('/restuarants.json')
  //     .then((data) => {
  //       data.json()
  //         .then((result) => {
  //           setRestuarant(result.restaurants)
  //         })

  //     })
  // }
  const dispatch = useDispatch()

const result = useSelector(state=>state.restuarantReducer)

const {restuarantList} = result


  useEffect(() => {
    // getRestuarant()
    dispatch(RestuarantlistActions())

  }, [])


  return (
    <Row>{
      restuarantList.map(item => (
        <Col sm={12} md={6} lg={4} xl={3}>
          <Restuarantcard restaurant={item} />

        </Col>))
    }</Row>
  )
}

export default Restuarantlist