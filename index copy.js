
//    for (let i = 1; i < 10; i++) {
//     setTimeout(function timer() {
//       console.log("hello world");
//     }, i * 3000);
//   }


   
   // GRID AND NEIGHBOUR CHECKER //

   // make two arrays that takes in a number representing the row and column count. 
   
   const gridRowTest = [];
   const gridColumnTest = [];
  
   function gridMaker (num){
       for (let c = 0; c < num; c++ ){
           for (let b = 0; b < num; b++){
                gridRowTest.push(c + 1);
            }
       
        } 

        for (let c = 0; c < num; c++ ){
            for (let b = 0; b < num; b++){
            gridColumnTest.push(c);
            }
             
        
         } 
   }

   gridMaker(5)

   

//   console.log(gridRowTest);
//   console.log(gridColumnTest);
   
   gridRowCoordinates = [1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5]
   gridColumnCoordinates = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]
   
   
   const btn = document.getElementById('button');
   btn.addEventListener("click", gameOfLife)
   
   
   
   function gameOfLife(){

   
   for (let blockNumber = 0; blockNumber < 25;  blockNumber++ ){

       parentChecker(blockNumber);

        
        function parentChecker(blockNumber){
            

        
        
        blockName = 'block' + blockNumber
        
        const parentBlock = document.getElementById(blockName);
        parentColor = window.getComputedStyle(parentBlock).getPropertyValue('background-color');
       
        
       
        const sumOfGridCoordinates = gridRowCoordinates[blockNumber] + gridColumnCoordinates[blockNumber]
       
        console.log(blockName)
       
       
        let aliveNeighbourCount = 0;
        
       
           
       
        
       for (let b = 0; b < 25; b++){
           neighbourChecker(b);

           
          
           function neighbourChecker(b){
              
           blockNameNeighbour = 'block' + b
           let neighbour = false;
           
           const neighbourBlock = document.getElementById(blockNameNeighbour);
           neighbourColor = window.getComputedStyle(neighbourBlock).getPropertyValue('background-color');
           
            const sumOfGridCoordinatePossibleNeighbour = gridRowCoordinates[b] + gridColumnCoordinates[b];
         
       
               sumOfRowFuture = gridRowCoordinates[blockNumber] - gridRowCoordinates[b];
               sumofColumnFuture = gridColumnCoordinates[blockNumber] - gridColumnCoordinates[b];
       
              
               if  ((sumOfGridCoordinates != sumOfGridCoordinatePossibleNeighbour) && 
                   ((sumOfGridCoordinates - sumOfGridCoordinatePossibleNeighbour )<= 1) && 
                   ((sumOfGridCoordinates - sumOfGridCoordinatePossibleNeighbour ) >= -1) && 
                   ((sumOfRowFuture ) <= 1 && (sumOfRowFuture >= -1)) && 
                   ((sumofColumnFuture ) <= 1 && (sumofColumnFuture >= -1))){
                        
                        neighbour = true;
                        
                        if(neighbourColor == 'rgb(0, 0, 0)'){
                            aliveNeighbourCount += 1;
                        }   
                        
                    }
                   
                }
                
                
            }
            
            console.log(aliveNeighbourCount);
            aliveNeighBourArray.push(aliveNeighbourCount);
            
            // if (aliveNeighbourCount < 1 && (parentColor = 'black') ){
            //     parentBlock.style.backgroundColor = 'white';
            // }
    
            // else if (aliveNeighbourCount = 1){
            //     parentBlock.style.backgroundColor = 'black';
            // }
    
            // else if(aliveNeighbourCount = 2) {
            //     parentBlock.style.backgroundColor = 'black';
            // }

            // else if(aliveNeighbourCount > 2){
            //     parentBlock.style.backgroundColor = 'white';
            // }
           
            

            }
           
        }
    }

       
   
   
   

    


   


