import menuPrincipal from "./app/menu/menuPrincipal"
import { repository } from "@/adapters/repository/utils/repositoryClient"

repository
  .$connect()
  .then(async () => {
    menuPrincipal()
    console.log("\n\n\nConnected to database!")
  })
  .catch(console.error)
