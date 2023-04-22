import { useState } from "react";
import {classNames} from "./utils/classNames"

function App() {

  const [isDarModeActive, setIsDarModeActive] = useState(true)
  const [openSidebar, setOpenSidebar] = useState(true)
  const handleDarkModeSelection = () => {
    // use can also use user input value
    if (isDarModeActive) {
      document.documentElement.classList.remove('dark')
      setIsDarModeActive(false)
    } else {
      document.documentElement.classList.add('dark')
      setIsDarModeActive(true)
      // is use pass custom value for darmode use can use
      // document.querySelector(':root').style.setProperty('--darModeColor', customColorValue);
    }
  }
  const handleChangeThemeColor = (colorCode)=>{
    // use can also use user input value
    document.querySelector(':root').style.setProperty('--primary', colorCode);

  }

  return (
    <div>
      <div className="flex flex-row w-full relative">
        <div className={classNames(openSidebar?"w-[300px]":"w-0", "transition-all h-screen")}>
          <div className={classNames("", "fixed h-screen bg-red-100 overflow-auto pb-4")}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi non animi quod quos expedita libero
              voluptas enim, dolorum adipisci dicta provident eveniet laudantium maxime, omnis tempora recusandae
              officiis officia.
              Quae illum doloribus, magni eaque, non obcaecati provident accusamus iste in facilis eos inventore
              commodi voluptatibus a eum aspernatur tempora laboriosam quidem! Pariatur quidem, adipisci rem ut dolore
              mollitia ipsa.
              Aperiam quisquam eligendi fuga. Repudiandae, aliquam? Dolorem, porro ex. Eum velit qui nobis repudiandae
              asperiores. Odit tenetur quos laboriosam, ex est aspernatur omnis corporis similique? Vel, officiis.
              Nostrum, cum totam.
              Molestias, illo debitis non aperiam eum sunt nulla eos iure totam exercitationem facere mollitia
              deserunt quam eaque earum beatae ad minima necessitatibus excepturi. Amet eaque voluptatum rem quisquam
              consectetur eum.
              Pariatur rem quasi, reiciendis necessitatibus vel beatae assumenda consectetur qui, tenetur iste quos
              labore veniam, aperiam sint. Eligendi officia cumque alias doloremque cum aspernatur nesciunt ea
              corrupti corporis. Ipsum, rem!
              Assumenda atque mollitia, recusandae quaerat doloribus minus sint eius corporis quod alias labore, hic
              debitis itaque quis ipsam possimus! Aspernatur nemo corrupti assumenda ab numquam inventore quisquam
              porro facere minima.
              Enim accusantium, dignissimos ipsam voluptas necessitatibus fugit sed officia consectetur laborum itaque
              fugiat, iusto aperiam iste! Dignissimos sint iusto ratione hic quam nobis sunt doloribus, consequuntur
              ex nostrum velit quos.
              Sapiente debitis dolor alias illum facere eligendi obcaecati, ipsam necessitatibus quia sint molestiae,
              sed asperiores eum perspiciatis optio quas adipisci vitae voluptatum, nobis quae. Quaerat unde natus
              totam necessitatibus debitis!
              Veritatis et cumque provident aliquam accusantium maiores, corrupti iusto recusandae eveniet ut laborum
              eaque at velit aliquid. Totam provident placeat ad, minus magnam nemo, voluptas suscipit, deleniti rem
              deserunt accusantium!
              Ut quia magnam necessitatibus tempore laborum porro assumenda delectus eligendi deserunt hic vitae
              voluptas dolore, eos libero beatae magni nobis debitis expedita veniam et natus quae deleniti enim!
              Laboriosam, temporibus?</p>
          </div>
        </div>
        <div className="w-full h-screen relative">
          <header className="fixed justify-between gap-4 top-0 h-14 bg-red-500 w-full flex z-50 py-4">
            <div>
            <h1 onClick={()=>setOpenSidebar(!openSidebar)}>Open/Clode Sidebar</h1>

            </div>
            <div className="flex gap-x-2">
              <h1 onClick={() => handleDarkModeSelection()}>Toggle DarkMode</h1>
              <h1 onClick={()=>handleChangeThemeColor("yellow")}>Toogle Red Color</h1>
            </div>
          </header>
          <main className="text-primary overflow-auto pt-16 pb-16 bg-gray-400 ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi non animi quod quos expedita libero
              voluptas enim, dolorum adipisci dicta provident eveniet laudantium maxime, omnis tempora recusandae
              officiis officia.
              Quae illum doloribus, magni eaque, non obcaecati provident accusamus iste in facilis eos inventore
              commodi voluptatibus a eum aspernatur tempora laboriosam quidem! Pariatur quidem, adipisci rem ut dolore
              mollitia ipsa.
              Aperiam quisquam eligendi fuga. Repudiandae, aliquam? Dolorem, porro ex. Eum velit qui nobis repudiandae
              asperiores. Odit tenetur quos laboriosam, ex est aspernatur omnis corporis similique? Vel, officiis.
              Nostrum, cum totam.
              Molestias, illo debitis non aperiam eum sunt nulla eos iure totam exercitationem facere mollitia
              deserunt quam eaque earum beatae ad minima necessitatibus excepturi. Amet eaque voluptatum rem quisquam
              consectetur eum.
              Pariatur rem quasi, reiciendis necessitatibus vel beatae assumenda consectetur qui, tenetur iste quos
              labore veniam, aperiam sint. Eligendi officia cumque alias doloremque cum aspernatur nesciunt ea
              corrupti corporis. Ipsum, rem!
              Assumenda atque mollitia, recusandae quaerat doloribus minus sint eius corporis quod alias labore, hic
              debitis itaque quis ipsam possimus! Aspernatur nemo corrupti assumenda ab numquam inventore quisquam
              porro facere minima.
              Enim accusantium, dignissimos ipsam voluptas necessitatibus fugit sed officia consectetur laborum itaque
              fugiat, iusto aperiam iste! Dignissimos sint iusto ratione hic quam nobis sunt doloribus, consequuntur
              ex nostrum velit quos.
              Sapiente debitis dolor alias illum facere eligendi obcaecati, ipsam necessitatibus quia sint molestiae,
              sed asperiores eum perspiciatis optio quas adipisci vitae voluptatum, nobis quae. Quaerat unde natus
              totam necessitatibus debitis!
              Veritatis et cumque provident aliquam accusantium maiores, corrupti iusto recusandae eveniet ut laborum
              eaque at velit aliquid. Totam provident placeat ad, minus magnam nemo, voluptas suscipit, deleniti rem
              deserunt accusantium!
              Ut quia magnam necessitatibus tempore laborum porro assumenda delectus eligendi deserunt hic vitae
              voluptas dolore, eos libero beatae magni nobis debitis expedita veniam et natus quae deleniti enim!
              Laboriosam, temporibus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi non animi quod quos expedita libero
              voluptas enim, dolorum adipisci dicta provident eveniet laudantium maxime, omnis tempora recusandae
              officiis officia.
              Quae illum doloribus, magni eaque, non obcaecati provident accusamus iste in facilis eos inventore
              commodi voluptatibus a eum aspernatur tempora laboriosam quidem! Pariatur quidem, adipisci rem ut dolore
              mollitia ipsa.
              Aperiam quisquam eligendi fuga. Repudiandae, aliquam? Dolorem, porro ex. Eum velit qui nobis repudiandae
              asperiores. Odit tenetur quos laboriosam, ex est aspernatur omnis corporis similique? Vel, officiis.
              Nostrum, cum totam.
              Molestias, illo debitis non aperiam eum sunt nulla eos iure totam exercitationem facere mollitia
              deserunt quam eaque earum beatae ad minima necessitatibus excepturi. Amet eaque voluptatum rem quisquam
              consectetur eum.
              Pariatur rem quasi, reiciendis necessitatibus vel beatae assumenda consectetur qui, tenetur iste quos
              labore veniam, aperiam sint. Eligendi officia cumque alias doloremque cum aspernatur nesciunt ea
              corrupti corporis. Ipsum, rem!
              Assumenda atque mollitia, recusandae quaerat doloribus minus sint eius corporis quod alias labore, hic
              debitis itaque quis ipsam possimus! Aspernatur nemo corrupti assumenda ab numquam inventore quisquam
              porro facere minima.
              Enim accusantium, dignissimos ipsam voluptas necessitatibus fugit sed officia consectetur laborum itaque
              fugiat, iusto aperiam iste! Dignissimos sint iusto ratione hic quam nobis sunt doloribus, consequuntur
              ex nostrum velit quos.
              Sapiente debitis dolor alias illum facere eligendi obcaecati, ipsam necessitatibus quia sint molestiae,
              sed asperiores eum perspiciatis optio quas adipisci vitae voluptatum, nobis quae. Quaerat unde natus
              totam necessitatibus debitis!
              Veritatis et cumque provident aliquam accusantium maiores, corrupti iusto recusandae eveniet ut laborum
              eaque at velit aliquid. Totam provident placeat ad, minus magnam nemo, voluptas suscipit, deleniti rem
              deserunt accusantium!
              Ut quia magnam necessitatibus tempore laborum porro assumenda delectus eligendi deserunt hic vitae
              voluptas dolore, eos libero beatae magni nobis debitis expedita veniam et natus quae deleniti enim!
              Laboriosam, temporibus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi non animi quod quos expedita libero
              voluptas enim, dolorum adipisci dicta provident eveniet laudantium maxime, omnis tempora recusandae
              officiis officia.
              Quae illum doloribus, magni eaque, non obcaecati provident accusamus iste in facilis eos inventore
              commodi voluptatibus a eum aspernatur tempora laboriosam quidem! Pariatur quidem, adipisci rem ut dolore
              mollitia ipsa.
              Aperiam quisquam eligendi fuga. Repudiandae, aliquam? Dolorem, porro ex. Eum velit qui nobis repudiandae
              asperiores. Odit tenetur quos laboriosam, ex est aspernatur omnis corporis similique? Vel, officiis.
              Nostrum, cum totam.
              Molestias, illo debitis non aperiam eum sunt nulla eos iure totam exercitationem facere mollitia
              deserunt quam eaque earum beatae ad minima necessitatibus excepturi. Amet eaque voluptatum rem quisquam
              consectetur eum.
              Pariatur rem quasi, reiciendis necessitatibus vel beatae assumenda consectetur qui, tenetur iste quos
              labore veniam, aperiam sint. Eligendi officia cumque alias doloremque cum aspernatur nesciunt ea
              corrupti corporis. Ipsum, rem!
              Assumenda atque mollitia, recusandae quaerat doloribus minus sint eius corporis quod alias labore, hic
              debitis itaque quis ipsam possimus! Aspernatur nemo corrupti assumenda ab numquam inventore quisquam
              porro facere minima.
              Enim accusantium, dignissimos ipsam voluptas necessitatibus fugit sed officia consectetur laborum itaque
              fugiat, iusto aperiam iste! Dignissimos sint iusto ratione hic quam nobis sunt doloribus, consequuntur
              ex nostrum velit quos.
              Sapiente debitis dolor alias illum facere eligendi obcaecati, ipsam necessitatibus quia sint molestiae,
              sed asperiores eum perspiciatis optio quas adipisci vitae voluptatum, nobis quae. Quaerat unde natus
              totam necessitatibus debitis!
              Veritatis et cumque provident aliquam accusantium maiores, corrupti iusto recusandae eveniet ut laborum
              eaque at velit aliquid. Totam provident placeat ad, minus magnam nemo, voluptas suscipit, deleniti rem
              deserunt accusantium!
              Ut quia magnam necessitatibus tempore laborum porro assumenda delectus eligendi deserunt hic vitae
              voluptas dolore, eos libero beatae magni nobis debitis expedita veniam et natus quae deleniti enim!
              Laboriosam, temporibus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi non animi quod quos expedita libero
              voluptas enim, dolorum adipisci dicta provident eveniet laudantium maxime, omnis tempora recusandae
              officiis officia.
              Quae illum doloribus, magni eaque, non obcaecati provident accusamus iste in facilis eos inventore
              commodi voluptatibus a eum aspernatur tempora laboriosam quidem! Pariatur quidem, adipisci rem ut dolore
              mollitia ipsa.
              Aperiam quisquam eligendi fuga. Repudiandae, aliquam? Dolorem, porro ex. Eum velit qui nobis repudiandae
              asperiores. Odit tenetur quos laboriosam, ex est aspernatur omnis corporis similique? Vel, officiis.
              Nostrum, cum totam.
              Molestias, illo debitis non aperiam eum sunt nulla eos iure totam exercitationem facere mollitia
              deserunt quam eaque earum beatae ad minima necessitatibus excepturi. Amet eaque voluptatum rem quisquam
              consectetur eum.
              Pariatur rem quasi, reiciendis necessitatibus vel beatae assumenda consectetur qui, tenetur iste quos
              labore veniam, aperiam sint. Eligendi officia cumque alias doloremque cum aspernatur nesciunt ea
              corrupti corporis. Ipsum, rem!
              Assumenda atque mollitia, recusandae quaerat doloribus minus sint eius corporis quod alias labore, hic
              debitis itaque quis ipsam possimus! Aspernatur nemo corrupti assumenda ab numquam inventore quisquam
              porro facere minima.
              Enim accusantium, dignissimos ipsam voluptas necessitatibus fugit sed officia consectetur laborum itaque
              fugiat, iusto aperiam iste! Dignissimos sint iusto ratione hic quam nobis sunt doloribus, consequuntur
              ex nostrum velit quos.
              Sapiente debitis dolor alias illum facere eligendi obcaecati, ipsam necessitatibus quia sint molestiae,
              sed asperiores eum perspiciatis optio quas adipisci vitae voluptatum, nobis quae. Quaerat unde natus
              totam necessitatibus debitis!
              Veritatis et cumque provident aliquam accusantium maiores, corrupti iusto recusandae eveniet ut laborum
              eaque at velit aliquid. Totam provident placeat ad, minus magnam nemo, voluptas suscipit, deleniti rem
              deserunt accusantium!
              Ut quia magnam necessitatibus tempore laborum porro assumenda delectus eligendi deserunt hic vitae
              voluptas dolore, eos libero beatae magni nobis debitis expedita veniam et natus quae deleniti enim!
              Laboriosam, temporibus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi non animi quod quos expedita libero
              voluptas enim, dolorum adipisci dicta provident eveniet laudantium maxime, omnis tempora recusandae
              officiis officia.
              Quae illum doloribus, magni eaque, non obcaecati provident accusamus iste in facilis eos inventore
              commodi voluptatibus a eum aspernatur tempora laboriosam quidem! Pariatur quidem, adipisci rem ut dolore
              mollitia ipsa.
              Aperiam quisquam eligendi fuga. Repudiandae, aliquam? Dolorem, porro ex. Eum velit qui nobis repudiandae
              asperiores. Odit tenetur quos laboriosam, ex est aspernatur omnis corporis similique? Vel, officiis.
              Nostrum, cum totam.
              Molestias, illo debitis non aperiam eum sunt nulla eos iure totam exercitationem facere mollitia
              deserunt quam eaque earum beatae ad minima necessitatibus excepturi. Amet eaque voluptatum rem quisquam
              consectetur eum.
              Pariatur rem quasi, reiciendis necessitatibus vel beatae assumenda consectetur qui, tenetur iste quos
              labore veniam, aperiam sint. Eligendi officia cumque alias doloremque cum aspernatur nesciunt ea
              corrupti corporis. Ipsum, rem!
              Assumenda atque mollitia, recusandae quaerat doloribus minus sint eius corporis quod alias labore, hic
              debitis itaque quis ipsam possimus! Aspernatur nemo corrupti assumenda ab numquam inventore quisquam
              porro facere minima.
              Enim accusantium, dignissimos ipsam voluptas necessitatibus fugit sed officia consectetur laborum itaque
              fugiat, iusto aperiam iste! Dignissimos sint iusto ratione hic quam nobis sunt doloribus, consequuntur
              ex nostrum velit quos.
              Sapiente debitis dolor alias illum facere eligendi obcaecati, ipsam necessitatibus quia sint molestiae,
              sed asperiores eum perspiciatis optio quas adipisci vitae voluptatum, nobis quae. Quaerat unde natus
              totam necessitatibus debitis!
              Veritatis et cumque provident aliquam accusantium maiores, corrupti iusto recusandae eveniet ut laborum
              eaque at velit aliquid. Totam provident placeat ad, minus magnam nemo, voluptas suscipit, deleniti rem
              deserunt accusantium!
              Ut quia magnam necessitatibus tempore laborum porro assumenda delectus eligendi deserunt hic vitae
              voluptas dolore, eos libero beatae magni nobis debitis expedita veniam et natus quae deleniti enim!
              Laboriosam, temporibus?</p>
            <footer className="fixed bottom-0 h-8 bg-red-500 w-full z-50">
              <h1>I'm footer</h1>
            </footer>
          </main>
        </div>
      </div>

      <div className="setting fixed h-screen w-[400px] top-0 -right-[300px] bg-green-500">
      </div>

    </div>
  );
}

export default App;
