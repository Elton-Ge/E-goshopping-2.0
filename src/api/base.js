const base = {
    baseUrl: '/api',
    sxtBaseUrl: '/sxt',
    shopcarBaseUrl: "/shopcar_api",
    searchBaseUrl: "/search_api",
    registerBaseUrl: "/register_api",
    payMentBaseUrl:"/payment_api",
    menuItem: "/frontend/itemCategory/selectItemCategoryAll",        // 左侧菜单
    search: "/search/list",                                 // 搜索接口
    selectFrontendContentByAD: "/frontend/content/selectFrontendContentByAD",// 首页 焦点轮播图接口
    register: '/sso/userRegister',                          // 注册接口
    checkRegister: "/sso/checkUserInfo",                    // 注册验证
    login: "/sso/userLogin",                                // 登陆接口
    logOut:"/sso/logOut",                                   // 退出登陆
    selectItemInfo: "/frontend/item/selectItemInfo",                 // 商品详情页 详情接口
    selectItemDescByItemId: "/frontend/item/selectItemDescByItemId", // 商品详情页 商品介绍
    selectTbItemParamItemByItemId: "/frontend/item/selectTbItemParamItemByItemId",// 商品详情页 规格参数
    addItem: "/cart/addItem/",                              // 加入购物车
    showCart:"/cart/showCart",                              // 购物车列表
    updateItemNum:"/cart/updateItemNum",                    // 购物车数量变化
    deleteItemFromCart:"/cart/deleteItemFromCart",          // 购物车删除接口
    getItemList:"/cart/goSettlement",                       // 去结算地址
    insertOrder:"/order/insertOrder"                        // 提交订单
}

export default base;
