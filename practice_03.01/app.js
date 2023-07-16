function isInt(value) {
    return !isNaN(value) && 
           parseInt(Number(value)) == value && 
           !isNaN(parseInt(value, 10));
  }
  
  // Место для первой задачи
  function calculateVolumeAndArea(l) {
      if(!isInt(l)) {
          return 'При вычислении произошла ошибка';
      }
      
      if(l <= 0) {
          return 'При вычислении произошла ошибка';
      }
      
      return `Объем куба: ${l * l * l}, площадь всей поверхности: ${6 * (l * l)}`
  }
  
  // Место для второй задачи
  function getCoupeNumber(number) {
      if(isNaN(+number)) {
          return 'Ошибка. Проверьте правильность введенного номера места';
      }
      
      if(number < 0 || number % 1 != 0) {
          return 'Ошибка. Проверьте правильность введенного номера места';
      }
      
      if(number <= 0 || number >= 36) {
          return 'Таких мест в вагоне не существует';
      }
      
      return Math.ceil(number / 4);
  }

  