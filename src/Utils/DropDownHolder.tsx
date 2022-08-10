import DropdownAlert from "react-native-dropdownalert";

type AlertType = "info" | "warn" | "error" | "success";

class DropDownHolder {
  static dropDown: DropdownAlert;

  static setDropDown(dropDown: DropdownAlert | null) {
    if (dropDown) {
      this.dropDown = dropDown;
    }
  }

  static alert(type: AlertType, title: string, message?: string) {
    this.dropDown.alertWithType(type, title, message || "");
  }
}
export { DropDownHolder };
