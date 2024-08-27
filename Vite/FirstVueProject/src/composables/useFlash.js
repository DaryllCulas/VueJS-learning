import swal from 'sweetalert'

export function useFlash() {
  function flash(alertMessage, message) {
    return swal(alertMessage, message, 'success')
  }

  return { flash }
}
