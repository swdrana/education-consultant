import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/connectDB'
import ApplicationData from '@/models/ApplicationData'

export async function DELETE(
  request: NextRequest,
  { params }: { params: any }
) {
  const { id } = params

  await connectDB()

  try {
    const result = await ApplicationData.findByIdAndDelete(id)
    if (!result) {
      return NextResponse.json(
        { error: 'Application not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { message: 'Application deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting application:', error)
    return NextResponse.json(
      { error: 'Failed to delete application' },
      { status: 500 }
    )
  }
}