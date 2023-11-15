import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

import styles from "./styles";

export default function Login() {
  const [statusView, setStatusView] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/albbus.png")}
        resizeMode="cover"
        style={styles.logo}
      >
        <View style={styles.login}>
          <Text style={styles.title}>Bienvenido de nuevo</Text>
          <Text style={[styles.subTitle]}>Iniciar sesión</Text>
          <View style={styles.inputContainer}>
            <Image
              style={styles.icon}
              source={require("../../assets/icons/letter.png")}
            />
            <TextInput style={styles.input} placeholder="Correo electrónico" />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.icon}
              source={require("../../assets/icons/password.png")}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry={!statusView}
            />
            <TouchableOpacity
              style={styles.iconPassword}
              onPress={() => setStatusView(!statusView)}
            >
              <Image
                style={{ display: statusView ? "flex" : "none" }}
                source={require("../../assets/icons/open.png")}
              />
              <Image
                style={{ display: statusView ? "none" : "flex" }}
                source={require("../../assets/icons/close.png")}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text
              style={[
                styles.link,
                { fontSize: 14, marginRight: 0, marginLeft: "auto" },
              ]}
            >
              ¿Olvidaste la contraseña?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <LinearGradient
              colors={["#003595", "#A50064"]}
              start={{ x: 0, y: 0 }}
              style={styles.btnText}
            >
              <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
                Iniciar sesión
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.link,
                { fontSize: 16, marginLeft: "auto", marginRight: "auto" },
              ]}
            >
              Crear cuenta
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.caption}>Powered by AI27</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
