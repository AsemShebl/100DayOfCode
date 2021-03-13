export class LikeComponent {
  constructor(private _likeCount: number, private _isSelected: boolean) {}
  //see if this button is Selected or not
  onClick() {
    // if (this.isSelected){
    //     this.LikeCount--
    // }else{
    //     this.LikeCount++
    // }

    // We can write it in a better way:
    this._likeCount += this._isSelected ? -1 : +1;

    //to toggel this field:
    this._isSelected = !this._isSelected;
  }

  get likeCount() {
    return this._isSelected;
  }
  get isSelected() {
    return this._isSelected;
  }
}
