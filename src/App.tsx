import { HiOutlineHeart, HiShoppingCart } from 'react-icons/hi'
import { Card } from "./components/Card"

function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center px-12">
      <div className="grid grid-cols-3 gap-6">
        <Card.Root className="rounded-lg">
          <Card.Image
            source="https://photos6.spartoo.pt/photos/365/3654060/3654060_500_A.jpg"
          />
          <Card.Content
            title="Adidas Gazelle"
            content="Adidas Originals is a brand of a line of casual and sportswear created by German multinational corporation Adidas."
          />

          <Card.Actions className='px-12'>
            <Card.Action
              icon={HiShoppingCart}
              onClick={() => console.log('to cart')}
            />

            <Card.Action
              icon={HiOutlineHeart}
              onClick={() => console.log('to favorite')}
            />
          </Card.Actions>
        </Card.Root>

        <Card.Root className="rounded-lg">
          <Card.Image
            source="https://www.futbolemotion.com/imagesarticulos/112439/grandes/zapatilla-de-futbol-sala-adidas-samba-black-0.jpg"
          />
          <Card.Content
            title="Adidas Samba OG"
            content="Adidas Originals is a brand of a line of casual and sportswear created by German multinational corporation Adidas."
          />

          <Card.Actions className='px-12'>
            <Card.Action
              icon={HiShoppingCart}
              onClick={() => console.log('to cart')}
            />

            <Card.Action
              icon={HiOutlineHeart}
              onClick={() => console.log('to favorite')}
            />
          </Card.Actions>
        </Card.Root>

        <Card.Root className="rounded-lg">
          <Card.Image
            source="https://maze.cdn.plataformaneo.com.br/produto/20230411124011_7010992990_D.png"
          />
          <Card.Content
            title="Adidas Forum 84"
            content="Adidas Originals is a brand of a line of casual and sportswear created by German multinational corporation Adidas."
          />

          <Card.Actions className='px-12'>
            <Card.Action
              icon={HiShoppingCart}
              onClick={() => console.log('to cart')}
            />
          </Card.Actions>
        </Card.Root>
      </div>
    </div>
  )
}

export default App
