namespace color {
    //% fixedInstance whenUsed block="Deuteranopia"
    export const Deuteranopia = bufferToPalette(hex`
        dcbacb
        f72107
        f84f00
        ebc204
        00a426
        0022ec
        ff8552
        f2bd3b
        eee437
        4fde8f
        e396ca
        fe01aa
        dcbacb
        dcbacb
        dcbacb
        000000
    `);

    //% fixedInstance whenUsed block="Protanopia"
    export const Protanopia = bufferToPalette(hex`
        000000
        000000
        c56595
        ddb45a
        cd966f
        e0db4c
        d2b83f
        3e8e13
        29570f
        8a99f4
        0101ef
        e8b3c7
        c2728b
        a68ef0
        ffffff
        ffffff
    `);

    //% fixedInstance whenUsed block="Tritanopia"
    export const Tritanopia = bufferToPalette(hex`
        000000
        000000
        f0704f
        bfb955
        ce6c05
        74ce89
        a5b600
        a9c1e3
        00871f
        e0cece
        8671ea
        8495ed
        dd9870
        d6a9bd
        ffffff
        ffffff
    `);

}