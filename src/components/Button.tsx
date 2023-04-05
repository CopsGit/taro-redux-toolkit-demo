import {Text, View} from "@tarojs/components"
import {useDispatch, useSelector} from "react-redux";
import {saveUserInfo} from "../redux/slice/authSlice";

const Button = () => {
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  return (
    <View>
      <View
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'red'
        }}
        onClick={() => {
          console.log('click')
          dispatch(saveUserInfo('123'))
        }
        }
      >
        <Text>Click me!</Text>
      </View>
      <Text>
        {auth.userInfo}
      </Text>
    </View>
  );
};

export default Button;
