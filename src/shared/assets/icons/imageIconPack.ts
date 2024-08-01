const imageIconPack = {
    shipments: require("@/shared/assets/images/boxes.png"),
    profile: require("@/shared/assets/images/avatar.png"),
    scan: require("@/shared/assets/images/barcode.png"),
    applogo: require("@/shared/assets/images/applogo.png"),
    wallet: require("@/shared/assets/images/wallet.png"),
    shippex: require("@/shared/assets/images/shippex.png"),
};

export { imageIconPack };

export type ImageIconPackType = keyof typeof imageIconPack;
