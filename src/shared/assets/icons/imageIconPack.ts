const imageIconPack = {
    shipments: require("@/shared/assets/images/boxes.png"),
    profile: require("@/shared/assets/images/avatar.png"),
    scan: require("@/shared/assets/images/barcode.png"),
    wallet: require("@/shared/assets/images/wallet.png"),
};

export { imageIconPack };

export type ImageIconPackType = keyof typeof imageIconPack;
