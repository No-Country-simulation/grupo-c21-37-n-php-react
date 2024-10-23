import { useAuth } from "../../hooks/useAuth";

export default function MisMascotas() {

  const { user, error } = useAuth({middleware: 'auth'})

  console.log(user)
  console.log(error)
  return (
    <div>MisMascotas</div>
  )
}
