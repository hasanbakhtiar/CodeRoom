var infoData = "This sysntax is true";
// var infoData = "hello";
// console.log(infoData);

/*
1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
2.Dəyişkən adlarını yazarkən İngilis əifbasından başqa əlifadan istifadə etmək qadağandır.
3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
6.Dəyişkən adları böyük kiçik hərfləri anlayır.
7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
9.Eyni dəyişkən adını dəişkənə vermək məsləhət deyil.
*/


// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// const  -> constant(dəyişməz)
// let    -> let(local dəyişkən)
// var    -> varibale(global dəyişkən)

// var infoDataVar = "Hello JavaScript";
// infoDataVar = "JavaScript amazing programming language -> var";
// console.log(infoDataVar);

// const infoDataConst = "JavaScript very perfect -> const";
// // infoDataConst = "hi";
// console.log(infoDataConst);

// let infoDataLet = "JavaScript native language in web -> let";
// infoDataLet = "Hi all programming language->let";
// console.log(infoDataLet);

//global
// var infoData = "JavaScript";

// if(true){
//     let infoDataOne = "One JavaScript";
//     console.log(infoDataOne);
//     //local
//     console.log(infoData);
// }
// console.log();


// if                   Əgər
// else if              Əgər deyilsə
// else                 Deyilsə 



// if (condition) {
    
// }else if(condition){

// }else{

// }



const infoTime = 13;

if(infoTime >= 5 && infoTime <= 10){
    console.log("Good Morinig");
        if (infoTime == 7) {
            console.log('Do breakfast');
        }else if(infoTime == 9){
            console.log("go to school");
        }

}else if(infoTime > 10 && infoTime <= 17){
        console.log("Good Afternoon");
        if (infoTime == 13) {
            console.log("Do launch");
        }

}else if(infoTime > 17 && infoTime <= 23){
        console.log("Good evening");

}else if((infoTime > 23 )|| (infoTime >= 0 && infoTime < 5)){
        console.log("Go to Sleep");
}else{
    console.log("No Time");
}





