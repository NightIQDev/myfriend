alert('Son links los cuadros blancos xd, tambien hay otras cosas que son links')

const names = [
    {
        name: 'hamburguer',
        url: 'https://scontent.fbaq8-1.fna.fbcdn.net/v/t1.6435-9/186532416_1058872621306402_3328672577543216271_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH_sDiU9w6dAQw-DKASjUF7K3vBFtMZFccre8EW0xkVx-RRKreBAHTf4d-vba6lnSPIeZj2S1KHIFwbXvH70S_c&_nc_ohc=mtrvKUqlHU4AX_EfV-D&_nc_ht=scontent.fbaq8-1.fna&oh=00_AfC4DIK8MN89y1F5qJh2TciuJzOPuTTj_LHZ0LohtxRrxQ&oe=64F3E14B'
    },
    {
        name: 'hamburguesa',
        url: 'https://scontent.fbaq8-1.fna.fbcdn.net/v/t1.6435-9/192733296_1069014796958851_8176446803876609456_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHjACvL2Xn-MS9sd2zAQEGMFMSN60HecfwUxI3rQd5x_H4jaCk_h60hPsmQGkFIfBKJDM7wl8LmcK9uN6Ne6Ssl&_nc_ohc=I5hfqCxFxQkAX-FcRHs&_nc_ht=scontent.fbaq8-1.fna&oh=00_AfBuITpm3fBH7OBDQ-gLj5nCJOZ_giHytjurEqPXGd6i4w&oe=64F4010D'
    },
    {
        name: 'pingu',
        url: 'https://scontent.fbaq8-1.fna.fbcdn.net/v/t1.6435-9/67687266_2133398770102257_5846150178683224064_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFpbsZdDkNLljYkvu_83TYpDlWNw5gmV7YOVY3DmCZXtuVCc-zq3AWNhN-xryfQyq3HOrmeZlPTyYKSRFoA2pZB&_nc_ohc=RNbSINUVNVMAX8AW3z-&_nc_ht=scontent.fbaq8-1.fna&oh=00_AfBL8eCt_cpGlQclmSnj5cTv_0rpdD0IunNiy8eccydFvg&oe=64F41448'
    },
    {
        name: 'elserio',
        url: 'https://scontent.fbaq8-1.fna.fbcdn.net/v/t1.18169-9/1006157_532179600163198_1717615147_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=de6eea&_nc_eui2=AeEtmvk7-p5jOuWI0kwDqLZMpN2-HWXpIOik3b4dZekg6DttBnh_tp6YWdySvuzvo5o4E3lXzJF6Bsk2yiVy0_vE&_nc_ohc=Pl5WnzyWw1kAX_Mq698&_nc_ht=scontent.fbaq8-1.fna&oh=00_AfB8x0uunIxHG_WLpnn7o6LX7ROWj-Wjbrp_2FazkASDRA&oe=64F3FE91'
    },
    {
        name: 'pecho de escaparate',
        url: 'https://scontent.fbaq8-1.fna.fbcdn.net/v/t1.18169-9/319180_260282360686258_1534541701_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=de6eea&_nc_eui2=AeEnUaMU2DElDeWJmhFHlIeGL2QM1nkltv4vZAzWeSW2_uLHhO_9qijVRm-94D-ZvcMzuFCpa0y1XnORzPeOhLU2&_nc_ohc=2jbXej8COz4AX-6tU_D&_nc_ht=scontent.fbaq8-1.fna&oh=00_AfBzmuWewOZnEM6nmdB7lfBGAhxowaInUrZaqGimHzt6Tg&oe=64F3E33D'
    },
    {
        name: 'serluixd',
        url: 'https://scontent.fbaq8-1.fna.fbcdn.net/v/t1.18169-9/30480_108098802571282_3893293_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=de6eea&_nc_eui2=AeEjJ4K2Kxmle5l5UTkxD5BJykiLqiEa-DzKSIuqIRr4PMdTQI6B6qQn0KADj7yfBtEfmvtrnuAFDKoRT6tp573F&_nc_ohc=lHsJHcjXldsAX_i_Xqn&_nc_ht=scontent.fbaq8-1.fna&oh=00_AfCyF6Pu3AwL35ezxPer01TSYoN4AgBd_AmXCHZQ7GkoFg&oe=64F414B2'
    },
    {
        name: 'ahi va la bolita',
        url: 'https://scontent.fbaq8-1.fna.fbcdn.net/v/t1.18169-9/30480_108098802571282_3893293_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=de6eea&_nc_eui2=AeEjJ4K2Kxmle5l5UTkxD5BJykiLqiEa-DzKSIuqIRr4PMdTQI6B6qQn0KADj7yfBtEfmvtrnuAFDKoRT6tp573F&_nc_ohc=lHsJHcjXldsAX_i_Xqn&_nc_ht=scontent.fbaq8-1.fna&oh=00_AfCyF6Pu3AwL35ezxPer01TSYoN4AgBd_AmXCHZQ7GkoFg&oe=64F414B2'
    },
    {
        name: 'Friend Ship',
        url: 'https://lh3.googleusercontent.com/pw/AIL4fc_NJcsiBnykcvAGNgIJg7P5Fe7UvEygRBLS5i89jvoGpyEi2wSkluL1kHHF9GT6q7CkWsRq1j0IGpQiCuJZ6h6B8bhJ4fxGE3_W2eDot6XfBXEhLD8V-1RG-6fwYRcmyBg1R6WZ_Qm9EHrQK31AgXvxMWIA1pFRHODxH5nEYQc6vurzWuPIcCr1Y03oAHQ0Bu_xMlzJJ8YrCjp1sTcqFHEVg_QW51WrkQXBIWAPPd-vGBEuHW0yd0Ds6AV279juYlIiRbCwjnWq9_5SDByp4EoC5Jo7ChYHFNk277rQZ1ogdRUZgkfYZnzy3f0EyYl7YM42Q-x4na_hXP7kOq6wkuxeVYKLImN1FW4VWDEZmImIY2N6R7tgQr3fbAOk7YOp5leiIZNXKgukwy_hrsxdikzsEXbtO5Grme9fg3hHVTpRRQjJMtR_g6YUe-Zxd7HannIRkye69y2t1eR7xz0V5QczDuexC2ATqS39XYoFIttwQJ-3ZRFanYVsgnq-S9rDzQsJbo3HODVCbvbIaC9Vsmm-Zz7n0SaTXgpbReNnbOURVlWIr0tM_D_unAiix6QexfYS4tzQNPXalKpU0qYizeXiUCHdFEr8UVaovQJUNt354tPPTuc4DgnHFncG2CPEU_B9syMh7QFGtJaTsUYf61UZ_-niHe5EadllpJixZBSHveEP3w9TGKIfWCNi3yuZ_lOCTMykmKOlpKOPuPn_7Ck6yvQ3sx_62xnoCjE7w4WHD2FOsSNAfZ9jyPMAQ8xBuCbGF0SZ0ohN3xXfzImhN_QsZhfTDtc51Mc4fV4bTtfB3KTeyr95u4ekkS-FubS64syDi_dmRO8IVxvBfhppcCnTL_3hBNlIgAyUiWW5cfdA_fTHS8W3HsHwKYYE43qU5gc4fcFMBiEJ5BWKE70qe7PvKEDZShDJWodGLyiOumdlTfKLgSnwrK98He0XAA=w720-h522-s-no?authuser=2'
    }
];

const lista = document.querySelector('.lista-names');

const namesHTML = names.map(e => {
    return `
        <div class="nenes">
        <a href=${e.url} target='blank'><p>${e.name}</p></a>
            
        </div>
    `;
}).join('');

lista.innerHTML = namesHTML;
