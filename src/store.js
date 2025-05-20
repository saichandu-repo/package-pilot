import {configureStore, createSlice} from "@reduxjs/toolkit"

     const  savedCart= localStorage.getItem("cart");
     const  localCart=savedCart? JSON.parse(savedCart):[];
     const savedUserData = JSON.parse(localStorage.getItem("users")) || [];
     const authData = JSON.parse(localStorage.getItem("auth")) || {};
const productSlice=createSlice({
     name:"products",
     initialState:{
        veg:[
            {
    name: "Carrot",
    price: "100",
    img: "https://admin.madrasmandi.in/uploads/websiteimage/32.png"
  },
   {
    name: "Bottle gourd",
    price: "50",
    img: "https://th.bing.com/th/id/OIP.CiUsiz4lWwCq_9XXi-mueQHaHa?rs=1&pid=ImgDetMain"
  },
     {
    name: "Snake gourd",
    price: "50",
    img: "https://www.olufresh.com/wp-content/uploads/2021/12/snakegourd.png"
  },
   {
    name: "Ivy gourd(dondakaya)",
    price: "30",
    img: "https://img3.exportersindia.com/product_images/bc-full/2018/8/5355389/ivy-gourd-1535368250-4234751.jpeg"
  },
  {
    name: "Bitter gourd",
    price: "50",
    img: " https://th.bing.com/th/id/OIP._JaIVq4O4XYzgVVv75_KvgAAAA?rs=1&pid=ImgDetMain"
  },
 
  {
    name: "DrumSticks",
    price: "100",
    img: "https://www.spicevillage.eu/cdn/shop/products/Fresh-Drumstick-1kg_5aa53c95-e556-490c-ba75-6245cc725b15_1946x.jpg?v=1652848676"
  },
  
  {
    name: "Cauliflower",
    price: "200",
    img: "https://th.bing.com/th/id/OIP.MSOz8hwYaaYxpBrukDxr_AHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain"
  },
  {
    name: "Beetroot",
    price: "300",
    img: "https://img.freepik.com/premium-photo/isolated-beetroot-white-background_1106493-9.jpg"
  },
  {
    name: "Lady Finger (Okra)",
    price: "50",
    img: "https://th.bing.com/th/id/OIP.vXugBBeH4rvA-Bix8PcE_gHaHa?w=500&h=500&rs=1&pid=ImgDetMain"
  },
  {
    name: "Capsicum (Bell Pepper)",
    price: "100",
    img: "https://th.bing.com/th/id/OIP._H6oj1yHNJGy_OZzpQroCwHaG-?w=1911&h=1802&rs=1&pid=ImgDetMain"
  },
  {
    name: "Cucumber",
    price: "200",
    img: "https://th.bing.com/th/id/OIP.dk2NqNV0WDVirh1Rt-DAaQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain"
  },
  {
    name: "Broccoli",
    price: "300",
    img: "https://th.bing.com/th/id/OIP.C7pEV01E6hXjWApDj9OOAgAAAA?w=400&h=400&rs=1&pid=ImgDetMain"
  },
  {
    name: "Spinach",
    price: "80",
    img: "https://th.bing.com/th/id/OIP.MIhh6wGi3kXh6m0sAzOhhAHaIl?rs=1&pid=ImgDetMain"
  },
  {
    name: "Kale",
    price: "90",
    img: "https://thumbs.dreamstime.com/b/kale-leaves-green-curly-salad-leaf-isolated-white-background-macro-191247322.jpg"
  },
  {
    name: "Swiss Chard",
    price: "85",
    img: "https://th.bing.com/th/id/OIP.R4kiYsQD8icsMZWE4trMPgHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain"
  },
  {
    name: "Mustard Greens",
    price: "70",
    img: "https://i.pinimg.com/736x/5c/a5/8c/5ca58c132ec13417ee5095c897e23c95.jpg"
  },
  {
    name: "Collard Greens",
    price: "75",
    img: "https://m.media-amazon.com/images/I/41Jo0lMQ0OL.jpg"
  },
  {
    name: "Arugula (Rocket)",
    price: "90",
    img: "https://th.bing.com/th/id/OIP.MAXMrfRTpBDmyKNvNz4IaQHaF8?rs=1&pid=ImgDetMain"
  },
  {
    name: "Lettuce",
    price: "60",
    img: "https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg"
  },
  {
    name: "Watercress",
    price: "95",
    img: "https://www.liveeatlearn.com/wp-content/uploads/2017/05/watercress-photo-1-1024x838.jpg"
  },
  {
    name: "Fenugreek Leaves (Methi)",
    price: "65",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/4/ID/WM/NW/35852523/fenugreek-leaves-seeds-1000x1000.jpeg"
  },
  {
    name: "Malabar Spinach (Basella)",
    price: "70",
    img: "https://farmfreshorganics.com.bd/wp-content/uploads/1723890656577.jpg"
  },
  {
    name: "Cabbage",
    price: "50",
    img: "https://th.bing.com/th/id/OIP.R1GXGBGBOYDhzmgq6ZhTPQHaIF?rs=1&pid=ImgDetMain"
  },
  {
    name: "Bok Choy",
    price: "85",
    img: "https://www.allrecipes.com/thmb/xiFBOE7rWkP5RH1jrxnYxkJgVkI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-what-is-bok-choy-7063209b75c2492cae84d2854f85b265.jpg"
  },
  {
    name: "Turnip Greens",
    price: "60",
    img: "https://th.bing.com/th/id/OIP.PfAkvNGlEazl86D-3bkMHAHaHa?rs=1&pid=ImgDetMain"
  }
        ],
         nonveg : [
  {
    name: "Chicken",
    price: "100",
    img: "https://th.bing.com/th/id/OIP.f2nF-MLWBBQc-3Pf8da-hwHaJ1?w=1506&h=2000&rs=1&pid=ImgDetMain"
  },
  {
    name: "Fish",
    price: "150",
    img: "https://th.bing.com/th/id/OIP.VETJbUJyDZrV5u6c23aHkQHaEK?w=1200&h=675&rs=1&pid=ImgDetMain"
  },
  {
    name: "Crab",
    price: "200",
    img: "https://static.vecteezy.com/system/resources/previews/007/788/686/large_2x/pickled-crab-eggs-in-fish-sauce-pack-in-plastic-box-for-delivery-seafood-delivery-business-exotic-menu-in-thailand-pickled-crab-eggs-in-disposable-plastic-container-isolated-sea-food-industry-photo.jpg"
  },
  {
    name: "Mutton",
    price: "400",
    img: "https://thekitchencommunity.org/wp-content/uploads/2022/10/mutton-meat.jpeg"
  },
  {
    name: "Prawns",
    price: "100",
    img: "https://media.istockphoto.com/photos/pile-of-king-prawns-on-a-white-background-picture-id105493116?k=6&m=105493116&s=612x612&w=0&h=p8yKJDmNlVoinA__rIwwP7Ma4nOJ7Fmf0VKjq6omeEg="
  },
  {
    name: "Mutton Kheema",
    price: "150",
    img: "https://img.freepik.com/premium-photo/chopped-raw-meat-cut-beef-into-small-pieces-blake-plate_755171-357.jpg"
  },
  {
    name: "Chicken Joints",
    price: "200",
    img: "https://thumbs.dreamstime.com/b/chiken-joints-4356638.jpg"
  },
  {
    name: "Lobster",
    price: "500",
    img: "https://th.bing.com/th/id/OIP.o81kCPtu_j3r6sJhPTkrSwHaDP?w=2000&h=874&rs=1&pid=ImgDetMain"
  },
  {
    name: "Squid",
    price: "250",
    img: "https://cdn.shopify.com/s/files/1/0280/9557/8244/products/Squidtubes.jpg?v=1589333517"
  },
  {
    name: "Clams",
    price: "180",
    img: "https://lzd-img-global.slatic.net/g/p/a909e6ae6c395be8e2325c4ce48d65c1.png_720x720q80.png"
  },
  {
    name: "Scallops",
    price: "220",
    img: "https://th.bing.com/th/id/OIP.udbjiB-NMzCZrLX8AkB3GgHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain"
  },
  {
    name: "Oysters",
    price: "300",
    img: "https://bradleysfish.com/wp-content/uploads/2021/05/Oyster-1kg-1-Custom.jpg"
  },
  {
    name: "Crayfish",
    price: "270",
    img: "https://th.bing.com/th/id/OIP.QfQIQNYNzgzPzuWtJn-S5QHaEK?rs=1&pid=ImgDetMain"
  },
  {
    name: "Octopus",
    price: "350",
    img: "https://th.bing.com/th/id/OIP.TFFPgw0iDF2rDMLK3Cg7XAHaHa?rs=1&pid=ImgDetMain"
  },
  {
    name: "Mussels",
    price: "190",
    img: "https://th.bing.com/th/id/R.2a0fb347199176863aeac0f96d6630fc?rik=K4u0nkGRM1EkGQ&riu=http%3a%2f%2fwww.sinchiplongseafood.com%2f421-large_default%2fiqf-mussel-meat.jpg&ehk=qqxFqxvZvGB4Vw6Yc2dpaNovepaNqmVVrWgQ9FyqJ%2fs%3d&risl=&pid=ImgRaw&r=0"
  }
],
    milk : [
  {
    name: "Fresh Milk",
    price: "60",
    img: "https://th.bing.com/th/id/OIP.xkaUI3smTln-vM4LvHwgygHaLC?w=1400&h=2088&rs=1&pid=ImgDetMain"
  },
  {
    name: "Butter",
    price: "80",
    img: "https://th.bing.com/th/id/OIP.fti9hjYC_gevYb-_AbghlgHaE6?rs=1&pid=ImgDetMain"
  },
  {
    name: "Cheddar Cheese",
    price: "150",
    img: "https://img.offers-cdn.net/assets/uploads/offers/za/39817886/parmalat-cheddar-cheese-pack-850g-normal.jpeg"
  },
  {
    name: "Yogurt",
    price: "50",
    img: "https://i5.walmartimages.com/seo/Yoplait-Original-Low-Fat-Yogurt-Pack-12-Ct-6-OZ-Fruit-Yogurt-Cups_03a998e1-ccad-481b-9b90-30ca7d78c689.53537076b165cd42225077d7cc072d71.jpeg"
  },
  {
    name: "Paneer",
    price: "120",
    img: "https://th.bing.com/th/id/OIP.LaVWv0RyJCsxaeou1bkN6gHaIZ?rs=1&pid=ImgDetMain"
  },
  {
    name: "Cream",
    price: "90",
    img: "https://tiimg.tistatic.com/fp/1/008/035/amul-fresh-cream-1-ltr-tetra-pack-for-cooking-uses-with-rich-taste-678.jpg"
  },
  {
    name: "Ghee",
    price: "200",
    img: "https://i.pinimg.com/736x/77/66/18/7766188fa1aa4231c60740a247988ebc.jpg"
  },
  {
    name: "Flavored Milk",
    price: "70",
    img: "https://th.bing.com/th/id/OIP.tcsA21kSyuVFyhuJexiuRwHaE8?rs=1&pid=ImgDetMain"
  },{
    name: "Rasgulla",
    price: "150",
    img: "https://m.media-amazon.com/images/I/81ImPQaLIRL._SL1500_.jpg"
  },
  {
    name: "Rasmalai",
    price: "180",
    img: "https://www.jiomart.com/images/product/600x600/rvddw9ga5l/rasmalai-can-1kg-product-images-orvddw9ga5l-p591614853-0-202205261940.jpg"
  },
  {
    name: "Gulab Jamun",
    price: "160",
    img: "https://th.bing.com/th/id/OIP.oNrNDndVRMGdZN4HWS0A8gHaHa?rs=1&pid=ImgDetMain"
  },
  {
    name: "Kalakand",
    price: "170",
    img: "https://m.media-amazon.com/images/I/61nZK6IKvDL._SL1000_.jpg"
  },
  {
    name: "Barfi",
    price: "140",
    img: "https://m.media-amazon.com/images/I/81fVta1rgZL._SL1500_.jpg"
  },

  {
    name: "Peda",
    price: "130",
    img: "https://th.bing.com/th/id/OIP.1PY2TgPO9-sZSpq9XiZTkAHaHa?rs=1&pid=ImgDetMain"
  },
  {
    name: "Cham Cham",
    price: "160",
    img: "https://m.media-amazon.com/images/I/71oA48pr1hL._SL1500_.jpg"
  },
  {
    name: "Basundi",
    price: "170",
    img: "https://dodladairy.com/wp-content/uploads/2024/02/Basundi.png"
  },
  {
    name: "Rabri",
    price: "180",
    img: "https://th.bing.com/th/id/R.51ab0b39a4e3174853becc26c63fe902?rik=734jF5%2f1AhoO4Q&riu=http%3a%2f%2fcdn.grofers.com%2fapp%2fimages%2fproducts%2fnormal%2fpro_389122.jpg%3fts%3d1524644235&ehk=tBmgblWa%2bD89cN9MnX%2bJtZAEj4t3nzieLDUZq44upwc%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    name: "Kheer",
    price: "150",
    img: "https://th.bing.com/th/id/OIP.PNGEHL3DdrTHRc3kueuRlQHaHf?rs=1&pid=ImgDetMain"
  },
  {
    name: "Mishti Doi",
    price: "140",
    img: "https://5.imimg.com/data5/SELLER/Default/2021/1/CK/XK/BC/118764700/mother-dairy-misti-doi-500x500.jpg"
  },
  {
    name: "Milk Cake",
    price: "160",
    img: "https://m.media-amazon.com/images/I/610NdItTb7L._SL1000_.jpg"
  },
  
  {
    name: "Shrikhand",
    price: "150",
    img: "https://th.bing.com/th/id/OIP.zuhHb_dOZ-s-Nj3l338x4QAAAA?rs=1&pid=ImgDetMain"
  },
  {
    name: "Kulfi",
    price: "160",
    img: "https://th.bing.com/th/id/OIP.-3_cvjMxK1grDhp29lZvfQAAAA?rs=1&pid=ImgDetMain"
  }
],
   chocolets:[
     {
    name: 'Cadbury Dairy Milk',
    img: "https://cdn.webshopapp.com/shops/300732/files/401118483/cadburys-cadbury-dairy-milk-fruit-and-nut-chocolat.jpg",
    description: 'Smooth milk chocolate bar.',
    price: '50',
  },
  {
    name: 'Nestlé KitKat',
    img: 'https://th.bing.com/th/id/OIP.JYfVSRDIv1XJosIruntfjwHaFj?rs=1&pid=ImgDetMain',
    description: 'Crispy wafer covered in milk chocolate.',
    price: '40',
  },
  {
    name: 'Ferrero Rocher',
    img:'https://th.bing.com/th/id/OIP.sQL_UiporuGue1YtF0T9hQHaJO?rs=1&pid=ImgDetMain',
    description: 'Hazelnut chocolate praline.',
    price: '100',
  },
  {
    name: 'Lindt Lindor',
    img: 'https://m.media-amazon.com/images/I/81oL5rR82bL._SL1500_.jpg',
    description: 'Smooth melting chocolate truffles.',
    price: '150',
  },{
    name: 'Toblerone',
    img: 'https://th.bing.com/th/id/R.82034e052916e3d0ae025a246743ae60?rik=WOMljocPogvGng&riu=http%3a%2f%2fimages.salsify.com%2fimage%2fupload%2fs--NMWimic9--%2fyslp9pvchxvmfuawuftu.jpg&ehk=hGPU2eM2dKjyAVguPD3ccs1637OIrV5hEO2m4laGvPo%3d&risl=&pid=ImgRaw&r=0',
    description: 'Swiss chocolate with honey and almond nougat.',
    price: '120',
  },{
    name: 'Amul Dark Chocolate',
    img: 'https://m.media-amazon.com/images/I/81EAqP0D0+L._SL1500_.jpg',
    description: 'Rich and smooth dark chocolate with 55% cocoa.',
    price: '100',
  },
  {
    name: 'DairyMilk Silk -heart-blush',
    img: 'https://th.bing.com/th/id/OIP.URIJY7YW81xaAMbScI5REQHaHa?rs=1&pid=ImgDetMain',
    description: 'Rich and smooth dark chocolate with 55% cocoa.',
    price: '100',
  },
  {
    name: 'DairyMilk silk',
    img: 'https://www.harishfoodzone.com/jb-content/uploads/2020/10/Cadbury-Dairy-Milk-Silk-Chocolate-Bar.jpg',
    description: 'Rich and smooth dark chocolate with 55% cocoa.',
    price: '100',
  },
  {
    name: 'Cadbury Peanut ',
    img: 'https://www.bigw.com.au/medias/sys_master/images/images/h3c/hcc/27272460402718.jpg',
    description: 'Rich and smooth dark chocolate with 55% cocoa.',
    price: '100',
  },
  {
    name: 'Bournville Rich Cocoa',
    img: 'https://www.bigbasket.com/media/uploads/p/l/100164966_32-cadbury-bournville-rich-cocoa-dark-chocolate-bar.jpg',
    description: 'Premium dark chocolate with 50% cocoa content.',
    price: '90',
  },
  {
    name: 'Kiss Me Bournville',
    img: 'https://th.bing.com/th/id/OIP.05ErPFPrqrNva1OnfYzxdgHaHa?rs=1&pid=ImgDetMain',
    description: 'Premium dark chocolate with 50% cocoa content.',
    price: '90',
  },
  {
    name: 'Galaxy Smooth Milk',
    img: 'https://image3.mouthshut.com/images/imagesp/925713566s.jpg',
    description: 'Silky smooth milk chocolate bar.',
    price: '80',
  },
  {
    name: 'Hershey’s Kisses',
    img: 'https://c.shld.net/rpx/i/s/i/spin/10127449/prod_ec_2091962802??hei=64&wid=64&qlt=50',
    description: 'Delicious bite-sized milk chocolates.',
    price: '150',
  },
  {
    name: 'Soklet Filter Kaapi',
    img: 'https://im.whatshot.in/img/2020/Dec/soklet-chocolate-1594990569-1607400421.jpg',
    description: 'Indian-origin dark chocolate infused with filter coffee.',
    price: '200',
  },
  {
    name: 'Pascati Rose Almond',
    img: 'https://www.bigbasket.com/media/uploads/p/l/40211251_1-entisi-rose-almonds-dragees-chocolate-coated.jpg',
    description: 'Organic dark chocolate with rose and almond flavors.',
    price: '250',
  },
  {
    name: 'La Folie Sea Salt Caramel',
    img: 'https://th.bing.com/th/id/OIP.CSyJQA72q46HFVUP7WopvwAAAA?rs=1&pid=ImgDetMain',
    description: 'Artisanal chocolate with sea salt and caramel.',
    price: '300',
  },
  {
    name: 'Paul & Mike Sitaphal',
    img: 'https://blackvanillagourmet.com/wp-content/uploads/2022/05/WebsiteListings-2021-09-17T154308.003.jpg',
    description: 'Milk chocolate bar with custard apple flavor.',
    price: '180',
  },
  {
    name: 'Choko La Cinnamon Clove',
    img: 'https://m.media-amazon.com/images/I/61kFjsKu+HL._SL1024_.jpg',
    description: 'Dark chocolate infused with cinnamon and clove.',
    price: '220',
  },
  {
    name: 'Fabelle Gianduja',
    img: 'https://m.media-amazon.com/images/I/71S1c-kK9mL._SL1500_.jpg',
    description: 'Luxury chocolate with hazelnut paste.',
    price: '350',
  },
   ]

     },reducers:{}
})
const cartSlice=createSlice({
    name:"cart",
    initialState:localCart,
    reducers:{
        addToCart:(state,inputItem)=>{
                 const item=state.find(item=>item.name==inputItem.payload.name)
                 if(item){
                       item.quantity += 1;

                 }
                 else{
      
                    state.push({...inputItem.payload,quantity:1})
                 }
                },
       incCart:(state,inputItem)=>{
        const item=state.find(item=>item.name==inputItem.payload.name)
        if(item){
              item.quantity +=1;
        }
      },
      decCart:(state,inputItem)=>{
        const item=state.find(item=>item.name==inputItem.payload.name)
       
        if(item.quantity===1){
          return state.filter((item)=>item.name!==inputItem.payload.name)
        }
      else{
        item.quantity-=1;
      }}
      ,
      removeCartItem:(state,inputItem)=>{
       return state.filter((item)=>item.name!==inputItem.payload.name)
      },
      clearCart:()=>[],
       
      
    }
})
const ordersSlice=createSlice({
  name:"orders",
  initialState:[],
  reducers:{
        addOrder:(state,newOrder)=>{
            state.push(newOrder.payload)
        }
  }
})
const userSlice=createSlice({
     name:"user",
    initialState: {
  users: savedUserData,
  isAuthenticate: authData.isAuthenticate || false,
  currentUser: authData.currentUser || null
},
     reducers:{
          registerUser:(state,userInput)=>{
              state.users.push(userInput.payload);
          },
          loginUser:(state,userInput)=>{
              let userFound=state.users.find(user=>user.userName===userInput.payload.userName && user.password===userInput.payload.password)
              if(userFound){
                  state.isAuthenticate=true;
                  state.currentUser= userFound;
                  document.getElementById("messege").innerHTML="login successfull".fontcolor("green")
              }
              else{
                document.getElementById("messege").innerHTML="invalid username or password".fontcolor("red");
              }
          },
          logOut:(state)=>{
            state.isAuthenticate=false;
            state.currentUser=null;
          },
     }
})
export let{addOrder}=ordersSlice.actions;
export let {addToCart,incCart,decCart,removeCartItem,clearCart} =cartSlice.actions;
export let {registerUser,logOut,loginUser}=userSlice.actions;
const store=configureStore({
       reducer:{
        products:productSlice.reducer,
        cart:cartSlice.reducer,
        orders:ordersSlice.reducer,
        user:userSlice.reducer,
       }
})
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart));
  localStorage.setItem("users", JSON.stringify(state.user.users)); // Only save users list
  localStorage.setItem("auth", JSON.stringify({
    isAuthenticate: state.user.isAuthenticate,
    currentUser: state.user.currentUser
  }));
});

export default store;

