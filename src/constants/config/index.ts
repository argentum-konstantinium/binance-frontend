import development from "@/constants/config/development";
import production from "@/constants/config/production";

const isProduction = false;

const config = isProduction ? production : development;

export default config;