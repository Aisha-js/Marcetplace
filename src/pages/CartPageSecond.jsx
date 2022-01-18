import { Add, Remove } from "@mui/icons-material";
import React, { useEffect } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { ClientContext } from "../context/ClientProvider";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import BasicModal from "./OrderForm";



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const ButtonCart = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

export default function CartPageSecond() {
  const { changeCountCartProduct, deleteProductInCart , cart , getCart } =
    React.useContext(ClientContext);

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

useEffect(() =>{
  getCart()
}, [])
if(!cart){
  return <h3>Loading...</h3>
}

  return (
    <Container>
      <Wrapper>
        <Title>ВАША КОРЗИНА</Title>
        <Top>
          <Link to="/products">
            <TopButton>ПРОДОЛЖИТЬ ПОКУПКУ</TopButton>
          </Link>

        </Top>
        <Bottom>
          <Info>
            {cart.products.map((item) => (
              <Product>
                <ProductDetail>
                  <Image src={item.product.image} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {item.product.name}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {item.product.id}
                    </ProductId>
                    <ProductColor /> {item.product.color}
                    <ProductSize>
                      <b>Size:</b> {item.product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add
                      style={{ cursor: "pointer" }}
                      onClick={(event) => {
                        if (item.count <= 0) {
                          return;
                        }
                        changeCountCartProduct(
                          item.count + 1,
                          item.product.id
                        );
                      }}
                    />
                    <ProductAmount>{item.count}</ProductAmount>
                    <Remove
                      style={{ cursor: "pointer" }}
                      onClick={(event) => {
                        if (item.count <= 0) {
                          return;
                        }
                        changeCountCartProduct(
                          item.count - 1,
                          item.product.id
                        );
                      }}
                    />
                  </ProductAmountContainer>
                  <ProductPrice>{item.product.price} </ProductPrice>
                  <SummaryItemPrice>Subtotal {item.subPrice} </SummaryItemPrice>
                  <ProductDetail>
                    <DeleteIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteProductInCart(item.product.id)}
                    />
                  </ProductDetail>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          
          <Summary>
            <SummaryTitle>ВАШ ЗАКАЗ</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Количество товаров</SummaryItemText>
              <SummaryItemPrice>{cart.products.reduce((prev,item)=> {
                console.log(prev, item)
                  return prev + item.count
                }, 0)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>ИТОГО</SummaryItemText>
              <SummaryItemPrice>{cart.totalPrice}</SummaryItemPrice>
            </SummaryItem>
            
            <ButtonCart onClick={handleOpen}>ПРОДОЛЖИТЬ ПОКУПКУ</ButtonCart>
           
          </Summary>
        </Bottom>
      </Wrapper>
      <BasicModal open={open} handleClose={handleClose}/>
      
    </Container>
    
  ); 
  }

