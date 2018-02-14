(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        var mapCopy = [];
        var count = 1;
        var N = map.length;
        var M = map[0].length;
        for(var i = 0; i < N; i++) {
          for (var j = 0; j < M; j++) {
            var k = i*M + j;
            mapCopy[k] = map[i][j];
            if(map[i][j]) {
              mapCopy[k] = count++;
            }
          }
        }
        count = connect(mapCopy, M);
        return count;
    }

    function connect(mapCopy, M){
      for(var k = 0; k < mapCopy.length; k++) {
          if(mapCopy[k]) {
            var kinext = k + M;
            var kjnext = k + 1;
            if(kinext && mapCopy[kinext]) {
              for (var i = 0; i < mapCopy.length; i++) {
                if(mapCopy[i] == mapCopy[kinext]) {
                  mapCopy[i] = mapCopy[k];
                }
              }
            }
            if(kjnext && kjnext % M != 0 && mapCopy[kjnext]) {
              for (var i = 0; i < mapCopy.length; i++) {
                if(mapCopy[i] == mapCopy[kjnext]) {
                  mapCopy[i] = mapCopy[k];
                }
              }
            }
          }
      }
      return new Set(mapCopy).size - 1;
    }


    root.SHRI_ISLANDS.solution = solution;
})(this);
