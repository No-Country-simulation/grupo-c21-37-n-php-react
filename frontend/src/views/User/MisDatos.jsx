import { useAuth } from "../../hooks/useAuth"

export default function MisDatos() {
  const { user, error } = useAuth({middleware: 'auth'})
  return (
    <div>MisDatos</div>
  )
}