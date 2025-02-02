import { addBlog } from "@/actions/blog";

export default function page() {
  return (
    <main>
        <section>
            <h1 className=' text-2xl md:text-4xl font-bold pb-10'>Manage Blogs</h1>
            <form action={addBlog} className=' form-control gap-5'>
                <input type='text' required className='input input-primary' placeholder='Title' name='title' />
                <input type='text' required className='input input-primary' placeholder='Short Description' name='shortDescription' />
                <textarea name="description" id="" placeholder='Description' className='input input-primary h-44'></textarea>
                <input type='file' required className='input input-primary' placeholder='Image' accept='image/*'  name='photo'/>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </section>
    </main>
  )
}
