class StorageService {
    private static readonly isLoggedInKey = 'isLoggedIn';
  
    static isLoggedInUser(): boolean {
      if (typeof window !== 'undefined') {
        const isLoggedIn = localStorage.getItem(StorageService.isLoggedInKey);
        return isLoggedIn === 'true';
      }
      return false; 
    }
  
    static setIsLoggedInUser(isLoggedIn: boolean): void {
      if (typeof window !== 'undefined') {
        localStorage.setItem(StorageService.isLoggedInKey, isLoggedIn.toString());
      }
    }
  }
  
  export default StorageService;
  